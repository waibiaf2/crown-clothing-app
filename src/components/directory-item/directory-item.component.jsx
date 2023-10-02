import {useNavigate} from "react-router-dom";

import {BackgroundImage, Body, DirectoryItemContainer} from "./directory-item.style";

const DirectoryItemComponent = ({category}) => {
    const {imageUrl, title} = category;
    const navigate = useNavigate();
    const navigationToCategoryHandler = (title) => navigate(`/shop/${title}`)
    return (
        <DirectoryItemContainer>
            <BackgroundImage imageUrl={imageUrl}/>
            <Body onClick={() => navigationToCategoryHandler(title)}>
                <h2>{title}</h2>
                <p>Shop Now</p>
            </Body>
        </DirectoryItemContainer>
    );
};

export default DirectoryItemComponent;