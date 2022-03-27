import {useState} from 'react';
import {ethers,BigNumber} from 'ethers';
import{Box, Button, Flex, Input,Text} from '@chakra-ui/react';

import roboPunksNFT from './RoboPunksNFT.json';

const roboPunksNFTAddress = '0x58e84cE2306a42519745Aa3e813f77CAC4203eed';

const MainMint = ({accounts,setAccounts}) => {

    const [mintAmount,setMintAmount] =  useState(1);
    console.log(accounts[0]);
    const isConnected = Boolean(accounts[0]);
    console.log (isConnected)

    async function handleMint()  {

        if (window.ethereum) {
           
            
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();
            const contract = new ethers.Contract(
                roboPunksNFTAddress,roboPunksNFT.abi,
                signer
            );
            try{
                const response = await contract.mint(BigNumber.from(mintAmount),{
                value: ethers.utils.parseEther((0.02 * mintAmount).toString())
                });
                console.log('response',response);


            } catch(err){
                console.log("error",err);
                alert ("Not enough funds for minting ")
            }


        }

    }

   const handleDecrement = ()=>{
       if (mintAmount <= 1 ) return;
       setMintAmount (mintAmount -1);

   }

   const handleIncrement = ()=>{
    if (mintAmount >= 3 ) return;
    setMintAmount (mintAmount +1);

}
   

  return ( 
    <Flex justify="center" align = "center" height="100vh" paddingBottom ="150px">
        <Box width = "520px" justify="center" align = "center">
        <div>
        <Text fontSize = "48px" textShadow ="0 5px #000000">RoboPunks</Text>
        <div class="flip-box" >
            <div class="flip-box-inner" >
             <div class="flip-box-front" >
             <Text fontSize = "30px" 
                  letterSpacing = "-5.5%"
                  fontFamily = "VT323"
                  textShadow = "0 2px 2px #000000"
                 
            
        > It's 2078. Can the RoboPunks NFT save humans from destructive rampant NFT 
            speculation? </Text>
             
            </div>
             <div class="flip-box-back" >
             <Text fontSize = "30px" 
                  letterSpacing = "-5.5%"
                  fontFamily = "VT323"
                  textShadow = "0 2px 2px #000000"
            
        >  Mint Robopunks to find out</Text>
             
              
                </div>
             </div>
            </div>
   
        </div>
        {(isConnected) ? (
            <div>
                <Flex justify = "center" align = "center">
                    <Button
                        backgroundColor = "#D6517D"
                       
                        borderRadius = "5px"
                        boxShadow ="0px 2px 2px 1px #0F0F0F"
                        color = "white"
                        cursor = "pointer"
                        fontFamily = "inherit"
                        padding = "15px"
                        marginTop = "5px"                 
                    onClick={handleDecrement}>-</Button>
                    <Input
                      ReadOnly
                      fontFamily ="inherit"
                      width = "100px"
                      height = "40px"
                      textAlign = "center"
                      paddingLeft = "19px"
                      marginTop = "5px"
                      type = "number"
                     value ={mintAmount}/>
                    <Button
                         backgroundColor = "#D6517D"
                         borderRadius = "5px"
                        boxShadow ="0px 2px 2px 1px #0F0F0F"
                         color = "white"
                         cursor = "pointer"
                        fontFamily = "inherit"
                         padding = "15px"
                         marginTop = "5px"                   
                        onClick={handleIncrement}>+</Button>
                                    
                  
                </Flex>

                <Button
                     backgroundColor = "#D6517D"
                     textAlign = "center"
                    borderRadius = "5px"
                    boxShadow ="0px 2px 2px 1px #0F0F0F"
                     color = "white"
                     cursor = "pointer"
                     fontFamily = "inherit"
                     padding = "15px"
                     marginTop = "10px"    
                     marginBottom = "5px"
                    onClick={handleMint}>
                        Mint Now
                    
                </Button>


               
            </div>
        ):(

            <Text
            marginTop = "10px"
            fontSize = "30px"
            letterSpacing = "-5.5%"
            fontFamily = "VT323"
            textShadow = "0 3px #000000"
            color = "#D6517D"
            
            >You must be connected to Mint</Text>

        )}

</Box>
</Flex>
  )
}

export default MainMint