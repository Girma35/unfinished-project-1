import Item from "./Item";
import { ABOUT, RESOURCE } from "./menu";

const ItemsContainer = () => {
    return (
        <>
            <div className="flex justify-center gap-32 sm:px-8 px-12 container cursor-pointer">
                <div className="flex-grow">
                    <Item link={ABOUT} title="About" /> 
                   
                </div>
               
                <Item link={RESOURCE} title="Resources" />
               
            </div>
        </>
    );
};

export default ItemsContainer;
