import BLOG from '@/blog.config'
import DarkModeButton from '@/components/DarkModeButton'

export const Footer = (props) => {
  const d = new Date()
  const currentYear = d.getFullYear()
  
  // 修改版权年份为 2023
  const copyrightDate = '2023'

  return (
    <footer className="relative w-full bg-black px-6 border-t">
      <DarkModeButton className='text-center pt-4' />

      <div className="text-yellow-300 container mx-auto max-w-4xl py-6 md:flex flex-wrap md:flex-no-wrap md:justify-between items-center text-sm">
        <div className='text-center'>&copy;{`${copyrightDate}`} {BLOG.AUTHOR}. All rights reserved.</div>
        {/* 删除 "Powered by" 部分 */}
      </div>
    </footer>
  )
}
