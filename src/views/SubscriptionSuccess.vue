<script>
export default {
  computed: {
    getUserEmail() {
      return this.$route.query.email || "<user-email>";
    },
  },
};
</script>

<template>
  <div class="subscription-success-container grid-flow" data-spacing="large">
    <div class="subscription-success-content grid-flow">
      <img src="../assets/images/icon-success.svg" alt="check mark icon" />
      <h1 class="title">Thanks for subscribing!</h1>

      <p>
        A confirmation email has been sent to
        <span class="subscribed-user-email">{{ getUserEmail }}</span>
        Please open it and click the button inside to confirm your subscription.
      </p>
    </div>

    <router-link to="/home" class="button">Dismiss message</router-link>
  </div>
</template>
