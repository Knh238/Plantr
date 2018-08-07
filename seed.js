//const db = require('./model');
const{db,Plot, Vegetable, Gardener}= require('./model');
//const PlotVegetable = db.model('plot_vegetable')
db.sync({force: true}).then(() => {
    console.log("Database synced!");
    let v1=Vegetable.create({name:'broccoli', color:'green', date_planted: Date.now()})
    let v2=Vegetable.create({name:'broccoli', color:'green', date_planted: Date.now()})
    let p1=Plot.create({size: 25, shaded:true})
    let p2=Plot.create({size: 50, shaded:false})
    let g1=Plot.create({name: 'John', age:45})
    let g2=Plot.create({name: 'Bill', age:63})
   
    return Promise.all([v1,v2,p1,p2,g1,g2])
    //return carrot.addPlot(plot1)
//   return PlotVegetable.create({
//   vegetableId: carrot.id,
//   plotId: plot1.id
// })
  })
  .catch(err => {
    console.log("Something went wrong.");
    console.log(err);
  })
  .finally(()=>{
    db.close();
  });
