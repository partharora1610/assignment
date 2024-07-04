"use client"

import { IoChatbubbleEllipses } from "react-icons/io5"
import { Button } from "../ui/button"
import { useState } from "react"
import { ScrollArea, ScrollBar } from "../ui/scroll-area"

const TalkTopics = ({ categories }: { categories: string[] }) => {
  const [selected, setSelected] = useState<string>(categories[0])

  return (
    <div className="mt-10">
      <ScrollAreaHorizontalDemo
        items={categories}
        selected={selected}
        setSelected={setSelected}
      />
      {selected && <TabContent item={categories[selected]} />}
    </div>
  )
}

const TabContent = ({ item }: { item: string }) => {
  return (
    <div>
      <div className="flex flex-col">
        {Array.from({ length: 5 }).map((_, i) => (
          <ConversationQuestionItem key={i} />
        ))}
        <div className="flex items-center justify-center">
          <div>
            <Button
              size="sm"
              className="bg-white px-4 border-2 text-[12px] border-gray-200 rounded-full text-gray-400 w-full mt-6 hover:bg-gray-100"
            >
              View More
              <span className="pl-1">{">"}</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

const ConversationQuestionItem = () => {
  return (
    <div className="border-b-2 border-gray-100 hover:bg-gray-100">
      <div className="flex gap-3 py-6">
        <IoChatbubbleEllipses size={20} className="text-primary-500" />
        <div>
          What were the downsides of not growing the business by more than 20%
          each month?
        </div>
      </div>
    </div>
  )
}

const ScrollAreaHorizontalDemo = ({
  items,
  selected,
  setSelected,
}: {
  items: string[]
  selected: string | null
  setSelected: (category: string) => void
}) => {
  return (
    <ScrollArea className="w-full whitespace-nowrap rounded-md custom-scroll-area">
      <div className="flex w-max space-x-4 gap-8 border-b-2 border-gray-100 relative">
        {items.map((item, i) => (
          <div
            key={i}
            onClick={() => {
              setSelected(item)
            }}
            className={`relative overflow-hidden rounded-md font-medium cursor-pointer p-2 ${
              selected === item
                ? "text-orange-500 selected"
                : "text-gray-400 hover:text-gray-500"
            }`}
          >
            {item}
            {selected === item && (
              <div className="absolute left-0 bottom-0 w-full h-0.5 bg-primary-500"></div>
            )}
          </div>
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  )
}

export default TalkTopics
