import CategoryItemComponent from "./../category-item/category-item.component";

import './directory.style.scss'

const DirectoryComponent = ({categories}) => {
    return (
        <div className="directory-container">
            {categories.map(category => {
                return <CategoryItemComponent  key={category.id} category={category}/>
            })}
        </div>
    );
};

export default DirectoryComponent;