
import { ModeToggle } from "./mode-toggle"

export const Header = () => {
    return (
        <div className='px-12 py-2 grid grid-cols-2 cursor-pointer '>
              <div className='text-2xl font-bold'> quiz maker  </div>
              <div className='p-4 flex justify-end'> <ModeToggle /> </div>
        </div>
    )
}