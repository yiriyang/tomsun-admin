<template>
  <Form
    class="form-wrap"
    :model="formState"
    name="basic"
    :label-col="{ span: 4 }"
    :wrapper-col="{ span: 20 }"
    autocomplete="off"
    @finish="onFinish"
    @finish-failed="onFinishFailed"
  >
    <FormItem label="用户名" name="username" :rules="[{ required: true, message: '请输入用户名!' }]">
      <Input v-model:value="formState.username" />
    </FormItem>

    <FormItem label="密码" name="password" :rules="[{ required: true, message: '请输入密码!' }]">
      <InputPassword v-model:value="formState.password" />
    </FormItem>

    <FormItem name="remember" :wrapper-col="{ offset: 4, span: 20 }">
      <Checkbox v-model:checked="formState.remember"> 记住账号 </Checkbox>
    </FormItem>

    <FormItem :wrapper-col="{ offset: 4, span: 20 }">
      <Button type="primary" html-type="submit"> 登录 </Button>
    </FormItem>
  </Form>
</template>
<script lang="ts" setup>
import { Form, FormItem, Input, InputPassword, Button, Checkbox } from 'ant-design-vue'
import router from '@/router'
import { reactive } from 'vue'
import { useStore } from '@/stores/modules/user'

interface FormState {
  username: string
  password: string
  remember: boolean
}
const formState = reactive<FormState>({
  username: '',
  password: '',
  remember: true
})
const onFinish = (values: any) => {
  console.log('Success:', values)

  useStore()
    .login(formState)
    .then(resp => {
      console.log(resp)
    })

  router.push('/')
}

const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo)
}
</script>

<style>
.form-wrap {
  width: 600px;
  margin: 100px auto;
  border: 1px solid #ddd;
  padding: 16px 24px;
}
</style>
