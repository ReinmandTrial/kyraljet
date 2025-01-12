<template>
  <AuthSignInMain v-if="$route.query.sign_in" />
  <AuthSignInEmail v-if="$route.query.sign_in_email" />
  <AuthSignUpStep1
    v-if="$route.query.sign_up && sign_up_step === 1"
    @next="sign_up_step++"
    @close="onClose"
  />
  <AuthSignUpStep2
    v-else-if="$route.query.sign_up && sign_up_step === 2"
    @next="sign_up_step++"
    @back="sign_up_step--"
    @close="onClose"
  />
  <AuthSignUpStep3
    v-else-if="$route.query.sign_up && sign_up_step === 3"
    @next="sign_up_step++"
    @close="onClose"
    @back="sign_up_step--"
  />
  <AuthSignUpStep4 v-else-if="$route.query.sign_up && sign_up_step === 4" @close="onClose" />
  <AuthSignUpMain
    v-else-if="$route.query.sign_up"
    @start-sign-up="onStartSignUp"
    @close="onClose"
  />
</template>

<script>
export default {
  data() {
    return {
      sign_up_step: 0,
    }
  },
  methods: {
    onStartSignUp() {
      this.sign_up_step = 1
    },
    onClose() {
      this.sign_up_step = 0
      this.$router.push({
        params: { ...this.$route.params },
        query: { ...this.$route.query, sign_up: undefined },
      })
    },
  },
}
</script>

<style lang="scss" scoped></style>
