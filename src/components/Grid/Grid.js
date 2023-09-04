import Card from "../Cards/Card";
import { useState } from "react";
import './Grid.css'
import iswinner from "../helpers/checkwinner";
function Grid ({numverofcard}){
        const [board,setBoard] = useState(Array(numverofcard).fill(""));
        const [Turn,setTurn] = useState(true);
        const [winner,setwinner] = useState(null);
        function play(index){
            if(Turn == true){
                board[index] = "O"

            }
            else{
                board[index] ="X"
            }
            const win = iswinner(board,Turn?"O":"X")
            if(win){
              setwinner(win);
            }
            setBoard([...board]);
            setTurn(!Turn)
        }
        function reset(){
            setTurn(true);
            setwinner(null);
            setBoard(Array(numverofcard).fill(""));
        }

        return(
            <div className="grid-wrapper">
                {
                      winner && (
                        <>
                         <h1 className="turn-highlight">Winner is {winner}</h1>
                        <button className="reset" onClick={reset}>Reset button</button></>
                       
                    )
                }
                <h1 className="turn-highlight">
                    Current Turn: {(Turn)?'O':'X'}
                </h1>
                <div className="grid">
                {board.map((el,idx)=><Card key = {idx} gameEnd = {winner?true:false} onplay={play} player = {el} index = {idx} />)}
            </div>
            </div>
           
        )
}

export default Grid;