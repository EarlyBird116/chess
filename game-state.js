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

let is_checkmate = false;
let is_stalemate = false;

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

let possible_square = [];


const highlight_possible_squares = function(piece){
    
    let x_coord = selected_piece.square[0];
    let y_coord = selected_piece.square[1];

    let repeatable = selected_piece.move_pattern_repeatable;


    //Logic to log which moves are allowable based on 
    for (i = 0;selected_piece.move_pattern.length;i++){
        current_move_pattern = selected_piece.move_pattern[i]
        let repeat_count = 1;
        
        //Loop to contain repeat
        for(){
            temp_x = x_coord + current_move_pattern[0] * repeat_count;
            temp_y = y_coord + current_move_pattern[1] * repeat_count;

            //Check for piece on square
            temp_square = board[temp_x][temp_y];

            if(temp_square){
                if(temp_square.color === selected_piece.color){
                    return; //Not added b/c can't capture own piece
                };
                if(temp_square.color !== selected_piece.color){

                    //Stops pawns from capturing forward
                    if(selected_piece == Pawn){
                        if (current_move_pattern[0] === 0){
                            return;
                            
                        }
                    }

                    //Add capturable piece to possible_square
                    if(check_if_check(selected_piece.color)){
                        possible_square.append([temp_x,temp_y]);
                    };
                };

                //Add en passant square if applicable
                if(en_passant_square === temp_square && selected_piece == Pawn){
                    if(check_if_check(selected_piece.color)){
                        possible_square.append(temp_x, temp_y);
                    };
                };
            } else {
                if(check_if_check(selected_piece.color)){
                    possible_square.append(temp_x, temp_y);
                };
                
                if(repeatable){
                    repeat_count++;
                    continue;
                } else{
                    return;
                };
            };
        };
    };
};

//Moves piece to square highlighted by highlight_possible_squares
make_move = function(square){
    if (square in possible_square) {

        //Shift pieces on board
        board[selected_piece.square[0]][selected_piece.square[1]] = '';
        board[square[0]][square[1]] = selected_piece;

        selected_piece.square = square; //set piece's square property to new .... Maybe unneeded and just have board hold piece objects... prob makes more sense

        //Check game for check, stalemate, checkmate
        if(turn === "white"){
            calculate_white_possible_moves;
        }else {
            calculate_black_possible_moves;
        };

        check_if_mate;
        en_passant;
    };
    
};


white_possible_moves_list = [];
black_possible_moves_list = [];

temp_possible_moves_list = [];

set_possible_moves = function(color, temp = true){
    //sets white_possible_moves_list
    if(turn === 'white'){
        for(let row = 0; row < board.length; row++){
            for(let col = 0; col < board[row].length; col++){
                if (board[row][col]){
                    white_possible_moves_list.append(highlight_possible_squares(board[row][col]));
                };
            };
        };
    } 
    //set black_possible_moves_list... same as previous logic, just for black
    else {
        for(let row = 0; row < board.length; row++){
            for(let col = 0; col < board[row].length; col++){
                if (board[row][col]){
                    black_possible_moves_list.append(highlight_possible_squares(board[row][col]));
                };
            };
        };
    }
};

check_if_mate = function(color){
    if(white_possible_moves_list.length = 0){
        if(check_if_check === true){
            is_checkmate = true;
        } else {
            is_stalemate = true;
        }
    }
};

//Checks to see if king is in check
check_if_check = function(color){
    if (color === 'white'){
        for (i=0; white_possible_move_list.length; i++){
            if(black_king_square === white_possible_move_list[i]){
                return true;
            }
        }
    } else{ 
        for (i=0; black_possible_move_list.length; i++){
            if(black_king_square === white_possible_move_list[i]){
                return true;
            }
        }
    }
    return false;
}