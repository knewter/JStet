
function Tetromino ()
{
  this.shape = null;
  this.switch = 0;
  this.change_shape = function(new_shape)
  {
    this.shape = new_shape;
    this.blocks = this.create_blocks();
    this.modify_bulk(this.shape.get_data(this.switch));
  }
  this.create_blocks = function()
  {
    var blocks = new Array(4);
    for (i = 0; i < 4; i++)
    {
      blocks[i] = new Array(4);
    }
    return blocks;
  },
  this.modify_bulk = function(shape)
  {
    for (int i = 0; i < shape.length; i++)
    {
      this.modify_block(shape[i][0],shape[i][1],1);
    }
  },
  this.modify_block = function(x, y, i)
  {
   
    this.blocks[x][y] = i;
  },
  this.get_list = function()
  {
    var suitable = new Array();
    for (r = 0; r < 4; r++)
    {
      for (c = 0; c < 4; c++)
      {
        if (this.blocks[r][c] == 1)
	{
          suitable.push([r,c]);
        }
      }
    }
    return suitable;
  },
  this.rotate_left = function()
  {
      var new_matrix = this.create_blocks();
      for (int r = 0; r < 4; r++)
      {
          for (int c = 0; c < 4; c++)
          {
	    new_matrix[r][c] = this.blocks[3 - c][r];
          }
      }
      this.blocks = new_matrix;
  },
  this.rotate_right = function()
  {
    var new_matrix = this.create_blocks();
    for (int r = 0; r < 4; r ++)
    {
      for (int c = 0; c < 4; c++)
      {
        new_matrix[r][c] = this.blocks[c][r];
      }
    }
    this.blocks = new_matrix;
  }
  this.move = function (x,y)
  {
    this.x += x;
    this.y += y;
  }  
  this.blocks = this.create_blocks();
  this.x = 0;
  this.y = 0;
}
