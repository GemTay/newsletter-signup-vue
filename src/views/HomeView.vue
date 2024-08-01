<script>
import { reactive, computed } from "vue";
import useValidate from "@vuelidate/core";
import { required, email, helpers } from "@vuelidate/validators";

export default {
  setup() {
    const state = reactive({
      email: "",
    });

    const rules = computed(() => {
      return {
        email: {
          required: helpers.withMessage("Email required", required),
          email: helpers.withMessage("Valid email required", email),
        },
      };
    });

    const v$ = useValidate(rules, state);

    return {
      state,
      v$,
    };
  },
  methods: {
    submitForm() {
      this.v$.$validate();
      if (!this.v$.$error) {
        this.$router.push({
          path: "/subscription-success",
          query: { email: this.state.email },
        });
      }
    },
  },
};
</script>

<template>
  <div class="newsletter-container">
    <picture>
      <source
        media="(min-width: 768px)"
        srcset="../assets/images/illustration-sign-up-desktop.svg"
        class="newsletter-image-desktop"
      />
      <img
        src="../assets/images/illustration-sign-up-mobile.svg"
        alt=""
        class="newsletter-image-mobile"
      />
    </picture>

    <div class="newsletter-info grid-flow">
      <h1 class="title">Stay updated!</h1>
      <div class="newsletter-info--description grid-flow">
        <p>Join 60,000+ product managers receiving monthly updates on:</p>

        <ul role="list" class="check-list">
          <li>
            <p>Product discovery and building what matters</p>
          </li>
          <li>
            <p>Measuring to ensure updates are a success</p>
          </li>
          <li>
            <p>And much more!</p>
          </li>
        </ul>
      </div>

      <form
        @submit.prevent="submitForm"
        novalidate
        ref="newsletter-signup-form"
        class="grid-flow"
      >
        <div class="form-group">
          <label for="email">Email address</label>
          <span
            v-for="error in v$.email.$errors"
            :key="error.$uid"
            class="error"
            >{{ error.$message }}</span
          >
          <input
            type="email"
            name="email"
            id="email"
            placeholder="email@company.com"
            autocomplete="email"
            v-model="state.email"
            required
          />
        </div>
        <button class="button" type="submit">
          Subscribe to monthly newsletter
        </button>
      </form>
    </div>
  </div>
</template>
