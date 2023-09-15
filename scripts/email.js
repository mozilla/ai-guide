/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import {
  checkEmailValidity,
  clearFormErrors,
  errorList,
  disableFormFields,
  enableFormFields,
  postToEmailServer,
} from "./form-utils";

import "@mozilla-protocol/core/protocol/js/protocol-newsletter.min.js";

let form;
let isBuilderPage;
let isMIECO;
let isInnovationPage;

const EmailForm = {
  handleFormError: (msg) => {
    let error;

    enableFormFields(form);

    switch (msg) {
      case errorList.EMAIL_INVALID_ERROR:
        error = form.querySelector(".error-email-invalid");
        break;
      case errorList.PRIVACY_POLICY_ERROR:
        error = form.querySelector(".error-privacy-policy");
        break;
      case errorList.NEWSLETTER_ERROR:
        error = form.querySelector(".error-newsletter");
        break;
      default:
        error = form.querySelector(".error-try-again-later");
    }

    if (error) {
      console.log(error);
      const errorContainer = form.querySelector(".mzp-c-form-errors");
      errorContainer.classList.remove("hidden");
      errorContainer.style.display = "block";
      error.classList.remove("hidden");
    }
  },

  handleFormSuccess: () => {
    form.classList.add("hidden");
    const thanks = document.getElementById("newsletter-thanks");
    thanks.style.display = "block";

    if (isInnovationPage) {
      //our design specs hide the call to action title and subtext when thank you message is displayed
      document.querySelector(".newsletter-cta").classList.add("hidden");
    }
  },

  validateFields: () => {
    const email = form.querySelector('input[type="email"]').value;
    const privacy = !!form.querySelector('input[name="privacy"]:checked');
    const newsletters = form.querySelectorAll(
      'input[name="interests"]:checked'
    );

    // Really basic client side email validity check.
    if (!checkEmailValidity(email)) {
      EmailForm.handleFormError(errorList.EMAIL_INVALID_ERROR);
      return false;
    }

    // Confirm privacy policy is checked
    if (!privacy) {
      EmailForm.handleFormError(errorList.PRIVACY_POLICY_ERROR);
      return false;
    }
    // the form on the builder page already includes a newsletter so these aren't required
    if (newsletters.length === 0 && !isBuilderPage) {
      EmailForm.handleFormError(errorList.NEWSLETTER_ERROR);
      return false;
    }

    return true;
  },

  submit: (e) => {
    const email = form.querySelector('input[type="email"]').value;
    const interests = Array.from(
      form.querySelectorAll('input[name="interests"]:checked')
    )
      .map((interests) => `${interests.value}`)
      .join(",");

    e.preventDefault();
    e.stopPropagation();

    // Disable form fields until POST has completed.
    disableFormFields(form);

    // Clear any prior messages that might have been displayed.
    clearFormErrors(form);

    // Perform client side form field validation.
    if (!EmailForm.validateFields()) {
      return;
    }

    if (isBuilderPage) {
      const newsletters =
        interests.length > 0
          ? `mozilla-ai-challenge, ${interests}`
          : "mozilla-ai-challenge";
      const params = { email, newsletters };
      postToEmailServer(
        params,
        EmailForm.handleFormSuccess,
        EmailForm.handleFormError
      );
    } else {
      const name = form.querySelector('input[id="name"]').value;
      const description = form.querySelector("textarea").value;

      const params = {
        email,
        name,
        description,
        interests,
      };

      if (isMIECO) {
        // The MIECO page will only send form info to email server -> mieco@mozilla.com
        postToEmailServer(
          { ...params, message_id: "mieco" },
          EmailForm.handleFormSuccess,
          EmailForm.handleFormError
        );
      }
      if (isInnovationPage) {
        // On the innovation landing page the user can do the following in the form:
        //    - Sign up for the mozilla-innovation newsletter
        //    - Send an interest email to innovations@mozilla.com
        //    - They can also both of the above options

        const website = form.querySelector('input[name="website"]');
        if (interests.includes("newsletter")) {
          postToEmailServer(
            {
              ...params,
              newsletters: "mozilla-innovation",
              message_id: "innovations",
            },
            EmailForm.handleFormSuccess,
            EmailForm.handleFormError
          );
        }

        if (interests.includes("collaboration")) {
          postToEmailServer(
            {
              ...params,
              website: website?.value || "",
              message_id: "innovations",
            },
            EmailForm.handleFormSuccess,
            EmailForm.handleFormError
          );
        }
      }
    }
  },

  handleCheckboxChange: ({ target }) => {
    const description = document.querySelector(".description");
    if (description) {
      if (target.checked) {
        description.style.display = "block";
      } else {
        description.style.display = "none";
      }
    }
  },

  init: () => {
    form = document.getElementById("newsletter-form");
    isBuilderPage = form.classList.contains("builders-form");
    isMIECO = form.classList.contains("mieco-form");
    isInnovationPage = form.classList.contains("innovations-form");

    document.body.classList.add("js");

    if (!form) {
      return;
    }

    if (isInnovationPage) {
      const checkbox = form.querySelector("input#collaboration");

      if (checkbox?.checked) {
        const description = document.querySelector(".description");
        description.style.display = "block";
      }

      checkbox.addEventListener(
        "change",
        EmailForm.handleCheckboxChange,
        false
      );
    }

    form.addEventListener("submit", EmailForm.submit, false);
  },
};

EmailForm.init();
