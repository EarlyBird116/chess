class Piece {
    constructor(color, square){
        this.color = color;
        this.square = square;
    }
    

    get possible_moves() {
        current_possible_moves = []
        for (let i = 0; i < this.move_list.length; i++){
            current_possible_moves.push(this.move_list[i](current_square))
        };
        return this.current_possible_moves;
    }
    
}

class Pawn extends Piece{
    moveset = [
        function(current_square, current_row) {
            
            //saves currently available moves to be returned at end of function
            move_list = []

            //possible moves for a white pawn
            if (this.color === "white") {
                //Other pieces that affect how pawn can move
                blocking_pieces = [this.get_piece(board_state[current_square + 8], this.color), this.get_piece(board_state[current_square + 16], this.color)]
                capturable_pieces = [this.get_piece(board_state[current_square + 7, this.color]), this.get_piece(board_state[current_square + 9], this.color)]

                if (blocking_pieces[0] === false)  {
                    move_list.push(current_square + 8);
                    if (row === 2 && blocking_pieces[1] === false) {
                        move_list.push(current_square + 16);
                    }
                }

                if (capturable_pieces[0] === true) {
                    move_list.push(current_square + 7)
                }
                
                if (capturable_pieces[1] === true) {
                    move_list.push(current_square + 9)
                }
                
                //Add en passant here
            }

            //possible moves for a black pawn
            if (this.color === "black") {
                if (blocking_pieces[0] === false)  {
                    move_list.push(current_square + 8);
                    if (row === 2 && blocking_pieces[1] === false) {
                        move_list.push(current_square + 16);
                    }
                }

                if (capturable_pieces[0] === true) {
                    move_list.push(current_square + 7)
                }
                
                if (capturable_pieces[1] === true) {
                    move_list.push(current_square + 9)
                }
                blocking_pieces = [this.get_piece(board_state[current_square - 8], this.color), this.get_piece(board_state[current_square - 16], this.color)]
                capturable_pieces = [this.get_piece(board_state[current_square - 7, this.color]), this.get_piece(board_state[current_square - 9], this.color)]
                
                //Add en passant here
            }
            
            return move_list
        }
    
    
    ]
}

class Knight extends Piece{
    move_pattern = [[]]
    move_pattern_repeatable = false
}

class Bishop extends Piece{
    move_pattern = [[-1,-1], [-1,1], [1,-1], [1,1]]
    move_pattern_repeatable = true
}

class Rook extends Piece{
    move_pattern = [[-1,0], [0,-1], [0,1], [1,0]]
    move_pattern_repeatable = true
}
class Queen extends Piece{
    move_pattern = [[-1,0], [0,-1], [0,1], [1,0], [-1,-1], [-1,1], [1,-1], [1,1]]
    move_pattern_repeatable = true
}
class King extends Piece{

    //Add castling functionality???

    move_pattern = [[-1,0], [0,-1], [0,1], [1,0], [-1,-1], [-1,1], [1,-1], [1,1]]
    move_pattern_repeatable = false
}

let possible_square = [];

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
            }
            if(temp_square.color !== selected_piece.color){

                //Stops pawns from capturing forward
                if(selected_piece == Pawn){
                    if (current_move_pattern[1] > 0){
                        return;
                        
                    }
                }

                //Add capturable piece to possible square
                possible_square.append([temp_x,temp_y]);
                continue;
            }

            //Add en passant square if applicable
            if(en_passant_square === temp_square && selected_piece == Pawn){
                possible_square.append(temp_x, temp_y);
            }
        } else {
            possible_square.append(temp_x, temp_y);
            if(repeatable){
                repeat_count++
                continue;
            } else{
                return;
            }
        }
    }
}
  