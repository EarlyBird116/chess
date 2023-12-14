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