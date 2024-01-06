let board = [
    ['','','','','','','',''],
    ['','','','','','','',''],
    ['','','','','','','',''],
    ['','','','','','','',''],
    ['','','','','','','',''],
    ['','','','','','','',''],
    ['','','','','','','',''],
    ['','','','','','','','']
]

let turn_counter = 0;
let turn_color = '';

function game_start(){
    const white_rook_1 = new Rook('white', [0,0]);
    const white_knight_1 = new Knight('white', [1,0])
    const white_bishop_1 = new Bishop('white', [2,0])
    const white_queen_1 = new Queen('white', [3,0])
    const white_king_1 = new King('white', [4,0])
    const white_bishop_2 = new Bishop('white', [5,0])
    const white_knight_2 = new Knight('white', [6,0])
    const white_rook_2 = new Rook('white', [7,0])
    const white_pawn_1 = new Pawn('white', [0,1])
    const white_pawn_2 = new Pawn('white', [1,1])
    const white_pawn_3 = new Pawn('white', [2,1])
    const white_pawn_4 = new Pawn('white', [3,1])
    const white_pawn_5 = new Pawn('white', [4,1])
    const white_pawn_6 = new Pawn('white', [5,1])
    const white_pawn_7 = new Pawn('white', [6,1])
    const white_pawn_8 = new Pawn('white', [7,1])
    const black_rook_1 = new Rook('white', [0,7]);
    const black_knight_1 = new Knight('white', [1,7])
    const black_bishop_1 = new Bishop('white', [2,7])
    const black_queen_1 = new Queen('white', [3,7])
    const black_king_1 = new King('white', [4,7])
    const black_bishop_2 = new Bishop('white', [5,7])
    const black_knight_2 = new Knight('white', [6,7])
    const black_rook_2 = new Rook('white', [7,7])
    const black_pawn_1 = new Pawn('white', [0,8])
    const black_pawn_2 = new Pawn('white', [1,8])
    const black_pawn_3 = new Pawn('white', [2,8])
    const black_pawn_4 = new Pawn('white', [3,8])
    const black_pawn_5 = new Pawn('white', [4,8])
    const black_pawn_6 = new Pawn('white', [5,8])
    const black_pawn_7 = new Pawn('white', [6,8])
    const black_pawn_8 = new Pawn('white', [7,8])
}

function Turn() {
    while (result === 'undecided'){

        //Set turn to correct player color
        if (turn_counter % 2 === 0) {
            turn_color = 'white';
        } else {
            turn_color = 'black';
        }


        //start player clock
        if (turn_color === 'white'){
            start_white_clock();
        }
        if (turn_color === 'black'){
            start_black_clock();
        }

        //click piece functionality to highlight possible moves


        //move piece to new square funcitonality

        

        //mate check to end game goes here


        turn_counter++;
    }
}