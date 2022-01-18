import { menuData } from "../data/MenuData";
import { Button } from "../styles/Button.styles";
import { DropdownContainer, Icon, CloseIcon, DropdownWrapper, DropdownMenu, DropdownLink, BtnWrap } from "../styles/Dropdown.styles";

const Dropdown = () => {
  return (
    <DropdownContainer>
      <Icon>
        <CloseIcon />
      </Icon>
      <DropdownWrapper>
        <DropdownMenu>
          {menuData.map((item, index) => {
            <DropdownLink to={item.link} key={index}>
              {item.title}
            </DropdownLink>;
          })}
        </DropdownMenu>
        <BtnWrap>
          <Button primary="true" round="true" big="true" to="/contact">
            contact us
          </Button>
        </BtnWrap>
      </DropdownWrapper>
    </DropdownContainer>
  );
};

export default Dropdown;
