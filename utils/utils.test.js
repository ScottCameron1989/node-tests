
const expect = require('expect');
const utils = require('./utils');

describe('#Utils', ()=> {
  it('should add two numbers', () => {
    var res = utils.add(33,11);

  expect(res).toBe(44).toBeA('number');
  });

  it('Should add two number async', (done) => {
      utils.asyncAdd(4,3, (sum) =>{
      expect(sum).toBe(7).toBeA('number');
      done();
    });
  });

  it('should square a number', () => {
    var res = utils.square(4);
    expect(res).toBe(16).toBeA('number');
    });

  it('should async square a number', (done) => {
      utils.asyncSquare(4, (res) =>{
          expect(res).toBe(16).toBeA('number');
          done();
      });
    });
});


it('should verify first and last names are set', () => {
    var user =  {
      name:'andrew mayhall',
      age:25,
      location:'Philadeplhia'
    }
    utils.setName(user,user.name);
    expect(user).toInclude({firstName: 'andrew', lastName: 'mayhall'}).toBeA('object');
    });



// it('should expect some values', () =>{
//   // expect(12).toNotBe(12);
//   // expect({name: 'Andrew'}).toEqual({name: 'Andrew'});
//   // expect([2,3,4]).toExclude(1);
//   expect({
//     name:'andrew',
//     age:25,
//     location:'Philadeplhia'
//   }).toInclude({
//     age:25
//   })
// });
