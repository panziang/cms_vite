import { ref } from 'vue'
import type PageContent from '@/components/page-content'

export function usePageSearch() {
  const pageContentRef = ref<InstanceType<typeof PageContent>>()
  const handleResetClick: () => void = () => {
    pageContentRef.value?.getPageData()
  }
  const handleQueryClick: (queryInfo: any) => void = (queryInfo: any) => {
    pageContentRef.value?.getPageData(queryInfo)
  }
  return { pageContentRef, handleResetClick, handleQueryClick }
}
