import type { IForm } from '@/base-ui/form'
export const modalFormConfig: IForm = {
  title: '角色',
  formItems: [
    {
      field: 'name',
      type: 'input',
      label: '角色名',
      placeholder: '请输入角色名'
    },
    {
      field: 'intro',
      type: 'input',
      label: '角色介绍',
      placeholder: '请输入角色介绍'
    }
  ],
  itemStyle: {},
  colLayout: { span: 24 }
}
