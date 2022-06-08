import React from 'react'

interface Props {
  Icon: (props: React.SVGProps<SVGSVGElement>) => JSX.Element
  title: string
  onClick?: () => {}
}

function SidebarRow({ Icon, title, onClick }: Props) {
  return (
    <div
      onClick={() => onClick?.()}
      className="flex max-w-fit item-center space-x-2 px-4 py-3 rounded-full hover:bg-gray-100 group transition-all duration-200 cursor-pointer"
    >
      <Icon className="h-6 w-6" />
      <p className="group-hover:text-twitter hidden md:inline-flex text-base font-light lg:text-xl">
        {title}
      </p>
    </div>
  )
}

export default SidebarRow
