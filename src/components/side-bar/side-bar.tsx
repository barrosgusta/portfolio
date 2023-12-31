import { ProfilePicture } from "../profile-picture";
import { SideBarInfo } from "./side-bar-info";

export function SideBar() {
    return (
        <div className="backdrop-blur-lg backdrop-saturate-200 backdrop-brightness-150 backdrop-contrast-125 dark:backdrop-brightness-75 rounded-xl bg-zinc-100/60 border border-zinc-300/60 shadow-default dark:bg-zinc-800/60 dark:border-zinc-700/60 h-full w-full lg:w-auto">
            <div className="grid grid-flow-col lg:grid-flow-row place-items-center gap-5 my-7 mx-5">
                <div className="grid grid-flow-row place-items-center justify-self-end lg:justify-self-auto">
                    <ProfilePicture className="w-32 h-32 lg:w-44 lg:h-44" />
                </div>
                <div className="grid lg:grid-flow-row lg:gap-5 place-items-center md:place-content-around justify-self-start lg:justify-self-auto h-full">
                    <h1 className="text-zinc-800 dark:text-zinc-200 text-xl text-center font-sfpmedium drop-shadow-sm">
                        Gustavo Barros da Silveira
                    </h1>
                    <div className="text-xs text-zinc-700 dark:text-zinc-300 font-semibold rounded-xl bg-zinc-100 dark:bg-zinc-900 shadow-default-sm py-1 px-3">
                        Desenvolvedor
                    </div>
                    <div className="flex lg:grid lg:justify-center place-items-center h-full">
                        <div className="lg:place-items-center">
                            <SideBarInfo />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
