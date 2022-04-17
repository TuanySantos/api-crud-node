import express from 'express';
import { studentModel } from '../models/studentModel.js';
const app = express();

app.post('/student', async (res, req) => {

  try {
    const student = new studentModel(req.body);
    await student.save();
    res.send(student);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.get('/', async (res, req) => {
  try {
    const student = await studentModel.find({});
    res.send(student);
    res.end();
  } catch (err) {
    req.send(500).send(err);

  }
});

app.patch('student/:id', async (res, req) => {
  try {
    const id = req.params.id;
    studentModel.findByIdAndUpdate({ _id: id }, req.body, req.body, {
      new: true,
    });
    res.send(student);
  } catch (err) {
    res.statusCode(500).send(err);
  }
});

app.delete('/student/:id', async (res, req) => {
  try {
    const student = studentModel.findByIdAndDelete({ _id: req.params.id });
    if (!student) {
      console.log('Documento não encontrado')
    } else {
      res.send(200).send();
    }
  } catch (err) {
    res.statusCode(500).send(err);
  }
})
export { app as studentRouter };
