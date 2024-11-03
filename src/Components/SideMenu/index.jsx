import { XMarkIcon } from "@heroicons/react/16/solid";
import './styles.css'

const SideMenu = ({ children, openMenu, onCloseMenu, title }) => {
    return (
        <aside className={`${openMenu ? "flex" : "hidden"} side-menu flex flex-col fixed right-0 border border-black rounded-lg bg-white`}>
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>{title}</h2>
                <button onClick={onCloseMenu}>
                    <XMarkIcon className='h-6 w-6 text-black' />
                </button>
            </div>
            {children}
        </aside>
    )
}

export { SideMenu }