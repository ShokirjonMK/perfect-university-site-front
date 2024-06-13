<template>
  <div class="container forms">
    <div class="row">
      <div class="col-12">
        <h1>2022 yil uchun qabul</h1>
      </div>
      <div class="offset-md-2"></div>
      <div class="col-12 col-md-8">
        <div class="col-12 submit">
          <h1>
            <svg
              style="margin-top: -5px"
              width="36"
              height="36"
              viewBox="0 0 36 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                opacity="0.1"
                cx="17.9999"
                cy="18.0009"
                r="17.1064"
                fill="#40DCB7"
              />
              <circle
                opacity="0.1"
                cx="18"
                cy="17.9985"
                r="14.5532"
                fill="#40DCB7"
              />
              <circle cx="18" cy="18" r="12" fill="#40DCB7" />
              <path
                d="M12.8936 17.4459L16.6613 21.1426C17.0502 21.5242 17.6731 21.5242 18.062 21.1426L24.1276 15.1914"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            Submitted successfully!
          </h1>
          <p class="dear">
            Dear Applicant, Thank you, your application is submitted
            successfully. Further instructions will be sent to the e-mail
            specified in the application. Please note that only 1 application
            per person per intake is allowed, so in case you haven’t received
            any information in your e-mail, please contact TSUE International
            office: +998 99 973 72 60 Best regards, TSUE International office
            team.
          </p>

          <h2>Additional information</h2>
          <p class="additional">
            <br /><br />
            International students are not subjected to undertake national
            examinations. Instead, undergradute admission for international
            students subject to in-person interviews. <br /><br />
            The admission applications are due between March 15, to July 15.
            <br /><br />
            What is appropriate if the documents do not meet the requirements?
            <br /><br />
            The applicant would be notified by email in 72 hours if the
            documents do not meet the requirements. This allows international
            students resubmitting their supporting documents once again within
            the due date. Once review of applications has started, we cannot
            accept further supplemental materials or updates to the application.
            <br /><br />
            Interview. The university will announce the day of the interview via
            your email.
          </p>
          <div class="col-12 text-center">
            <button class="lightBlueBtn">Back to main page</button>
          </div>
        </div>
        <div class="issue">
          <p class="text-center">
            In case of any questions or problems please contact TSUE
            International office: <span>+998 99 973 72 60</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Finished',
}
</script>

<style lang="scss" scoped>
h1 {
  font-size: 0.9375rem;
  line-height: 30px;
  margin-top: 0;
}

h2 {
  font-style: normal;
  font-weight: bold;
  font-size: 0.9375rem;
  line-height: 30px;
  color: #44494f;
  margin-top: 32px;
}

.dear {
  font-style: normal;
  font-weight: 500;
  font-size: 1.0625rem;
  line-height: 144.5%;
  color: #999ea4;
}

.additional {
  font-style: normal;
  font-weight: 500;
  font-size: 1.1875rem;
  line-height: 144.5%;
  color: #999ea4;
  margin-top: -20px;
  margin-bottom: 28px;
}
</style>
