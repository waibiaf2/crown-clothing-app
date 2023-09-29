import {Link} from "react-router-dom";

import {BackgroundImage, Body, DirectoryItemContainer} from "./directory-item.style";

const DirectoryItemComponent = ({category}) => {
    const {imageUrl, title} = category;
    return (
        <DirectoryItemContainer>
            <BackgroundImage imageUrl={imageUrl}/>
            <Body>
                <Link to={`/shop/${title}`}>
                    <h2>{title}</h2>
                    <p>Shop Now</p>
                </Link>
            </Body>
        </DirectoryItemContainer>
    );
};

export default DirectoryItemComponent;