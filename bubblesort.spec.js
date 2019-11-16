describe('Bubble Sort', function(){
  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });
  it('after first swap', function(){
    expect( bubbleSort([3, 1, 2, 4]) ).toEqual( [1, 3, 2, 4] );
  });
});
