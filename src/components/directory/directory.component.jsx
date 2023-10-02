
import './directory.style'
import {DirectoryContainer} from "./directory.style";
import DirectoryItemComponent from "../directory-item/directory-item.component";


const DirectoryComponent = ({categories}) => {
    return (
        <DirectoryContainer>
            {categories.map(category => {
                return (
                    <DirectoryItemComponent
                        key={category.id}
                        category={category}
                    />
                );
            })}
        </DirectoryContainer>
    );
};

export default DirectoryComponent;