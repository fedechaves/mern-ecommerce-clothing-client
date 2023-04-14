import { useSelector, useDispatch } from "react-redux";
import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import styled from "@emotion/styled";
import { shades } from "../../theme";
import {
  decreaseCount,
  increaseCount,
  removeFromCart,
  setIsCarOpen,
} from "../../state";
import { useNavigate } from "react-router-dom";
import { Box, Typography } from "@mui/material";

const FlexBox = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  `; 

const CartMenu = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);
  const isCartOpen = useSelector((state) => state.cart.isCartOpen);

  const totalPrice = cart.reduce((total, item) => {
    return total + item.count * item.attributes.price;
  }, 0);

  return (
    <Box //overlay
      display={isCartOpen ? "block" : "none"}
      backgroundColor = "rgba(0,0,0,0.4)"
      position="fixed"
      zIndex={10}
      width="100%"
      height="100%"
      left="0"
      top="0"
      overflow="auto"
      >
        <Box //modal
          position="fixed"
          right="0"
          bottom="0"
          width="max(400px, 30%)"
          height="100%"
          backgroundColor="white"
          >
            <Box
              padding="30%"
              overflow="auto"
              height="100%"
              >
              {/* HEADER */}
              <FlexBox mb="15px">
                <Typography variant="h3">Shopping Bag ({ cart.length })</Typography>
                <IconButton onClick={() => dispatch(setIsCarOpen({}))}>
                  <CloseIcon />
                </IconButton>
              </FlexBox>

              {/* CART LIST */}
              
            </Box>

        </Box>
    </Box>
  )
}

export default CartMenu
