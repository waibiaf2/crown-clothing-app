import DirectoryItemComponent from "../directory-item/directory-item.component";

import './directory.style'
import {DirectoryContainer} from "./directory.style";

const DirectoryComponent = ({categories}) => {
    return (
        <DirectoryContainer>
            {categories.map(category => {
                return <DirectoryItemComponent key={category.id} category={category}/>
            })}
        </DirectoryContainer>
    );
};

export default DirectoryComponent;