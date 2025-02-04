<template>
  <AuthSignInMain v-if="$route.query.sign_in" />
  <AuthSignInEmail v-if="$route.query.sign_in_email" />
  <AuthSignUpStep1
    v-if="$route.query.sign_up && sign_up_step === 1"
    @back="sign_up_step = 0"
    @next="onNextStepSgnUp"
    @close="onClose"
  />
  <AuthSignUpStep2
    v-else-if="$route.query.sign_up && sign_up_step === 2"
    :email="form_sign_up.email"
    @next="onNextStepSgnUp"
    @back="sign_up_step--"
    @close="onClose"
  />
  <AuthSignUpStep3
    v-else-if="$route.query.sign_up && sign_up_step === 3"
    :error="error_sign_up"
    @finish="onFinishSgnUp"
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
      form_sign_up: {},
      error_sign_up: '',
    }
  },
  mounted() {},
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
    onNextStepSgnUp(form) {
      this.form_sign_up = {
        ...this.form_sign_up,
        ...form,
      }
      this.sign_up_step++
    },
    async onFinishSgnUp(form) {
      this.error_sign_up = ''
      this.form_sign_up = {
        ...this.form_sign_up,
        ...form,
      }

      await $fetch('https://kuraljet.pp.ua/auth/signup/client', {
        method: 'POST',
        body: {
          email: this.form_sign_up.email,
          password: this.form_sign_up.password,
          confirm_password: this.form_sign_up.confirm_password,
          profile: {
            first_name: this.form_sign_up.first_name,
            middle_name: this.form_sign_up.first_name,
            last_name: this.form_sign_up.last_name,
            sex: 'M',
            role: 'client',
          },
        },
      })
        .then(({ data }) => {
          const client_access = useCookie('client_access', {
            maxAge: 3 * 24 * 60 * 60,
          })
          const client_refresh = useCookie('client_refresh', {
            maxAge: 3 * 24 * 60 * 60,
          })

          client_access.value = data.data.token.access
          client_refresh.value = data.data.token.refresh

          this.sign_up_step++
        })
        .catch(() => {
          this.error_sign_up = 'Ошибка'
          this.error = true
        })
    },
  },
}
</script>

<style lang="scss" scoped></style>
