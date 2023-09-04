function iswinner(boards,symbol){

    if(boards[0]==boards[1]  && boards[1]==boards[2] && boards[2]==symbol) return symbol;
    if(boards[3]==boards[4]  && boards[4]==boards[5] && boards[5]==symbol) return symbol;
    if(boards[6]==boards[7]  && boards[7]==boards[8] && boards[8]==symbol) return symbol;

    if(boards[0]==boards[3]  && boards[3]==boards[6] && boards[6]==symbol) return symbol;
    if(boards[1]==boards[4]  && boards[4]==boards[7] && boards[7]==symbol) return symbol;
    if(boards[0]==boards[5]  && boards[5]==boards[8] && boards[8]==symbol) return symbol;

    if(boards[0]==boards[4]  && boards[4]==boards[8] && boards[4]==symbol) return symbol;
    if(boards[0]==boards[4]  && boards[4]==boards[6] && boards[4]==symbol) return symbol;

    return "";

    
}

export default iswinner;