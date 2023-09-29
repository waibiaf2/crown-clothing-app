import './directory-item.style.scss';
import {BackgroundImage, Body, DirectoryItemContainer} from "./directory-item.style";

const DirectoryItemComponent = ({category}) => {
    const {imageUrl, title} = category;
    return (
        <DirectoryItemContainer>
            <BackgroundImage imageUrl={imageUrl}/>
            <Body>
                <h2>{title}</h2>
                <p>Shop Now</p>
            </Body>
        </DirectoryItemContainer>
    );
};

export default DirectoryItemComponent;