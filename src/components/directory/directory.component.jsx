import DirectoryItemComponent from "../directory-item/directory-item.component";

import './directory.style.scss'

const DirectoryComponent = ({categories}) => {
    return (
        <div className="directory-container">
            {categories.map(category => {
                return <DirectoryItemComponent key={category.id} category={category}/>
            })}
        </div>
    );
};

export default DirectoryComponent;