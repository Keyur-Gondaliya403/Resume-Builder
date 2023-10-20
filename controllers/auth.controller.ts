import db from "../models";
import multer from "multer";
import path from "path";
import fs from "fs";
import nodemailer from "nodemailer";
import jwt from "jsonwebtoken";
import { Request, Response } from "express";

const User = db.user;

const signup = async (req: Request, res: Response) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });
  if (user) {
    res.status(403).json({ message: "User already exists" });
  } else {
    const newUser = new User({ username, password });
    await newUser.save();
    // const token = jwt.sign({ id: newUser._id }, SECRET, { expiresIn: '1h' });
    res.json({ message: "User created successfully", a: 1234 });
  }
};
const login = async (req: Request, res: Response) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });
  if (user) {
    res.status(403).json({ message: "User already exists" });
  } else {
    const newUser = new User({ username, password });
    await newUser.save();
    // const token = jwt.sign({ id: newUser._id }, SECRET, { expiresIn: '1h' });
    res.json({ message: "User created successfully", a: 1234 });
  }
};
const forgotPassword = async (req: Request, res: Response) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });
  if (user) {
    res.status(403).json({ message: "User already exists" });
  } else {
    const newUser = new User({ username, password });
    await newUser.save();
    // const token = jwt.sign({ id: newUser._id }, SECRET, { expiresIn: '1h' });
    res.json({ message: "User created successfully", a: 1234 });
  }
};
const verifyLink = async (req: Request, res: Response) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });
  if (user) {
    res.status(403).json({ message: "User already exists" });
  } else {
    const newUser = new User({ username, password });
    await newUser.save();
    // const token = jwt.sign({ id: newUser._id }, SECRET, { expiresIn: '1h' });
    res.json({ message: "User created successfully", a: 1234 });
  }
};
const resetPassword = async (req: Request, res: Response) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });
  if (user) {
    res.status(403).json({ message: "User already exists" });
  } else {
    const newUser = new User({ username, password });
    await newUser.save();
    // const token = jwt.sign({ id: newUser._id }, SECRET, { expiresIn: '1h' });
    res.json({ message: "User created successfully", a: 1234 });
  }
};
const verifyEmail = async (req: Request, res: Response) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });
  if (user) {
    res.status(403).json({ message: "User already exists" });
  } else {
    const newUser = new User({ username, password });
    await newUser.save();
    // const token = jwt.sign({ id: newUser._id }, SECRET, { expiresIn: '1h' });
    res.json({ message: "User created successfully", a: 1234 });
  }
};
const me = async (req: Request, res: Response) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });
  if (user) {
    res.status(403).json({ message: "User already exists" });
  } else {
    const newUser = new User({ username, password });
    await newUser.save();
    // const token = jwt.sign({ id: newUser._id }, SECRET, { expiresIn: '1h' });
    res.json({ message: "User created successfully", a: 1234 });
  }
};
const updateProfile = async (req: Request, res: Response) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });
  if (user) {
    res.status(403).json({ message: "User already exists" });
  } else {
    const newUser = new User({ username, password });
    await newUser.save();
    // const token = jwt.sign({ id: newUser._id }, SECRET, { expiresIn: '1h' });
    res.json({ message: "User created successfully", a: 1234 });
  }
};
export {
  signup,
  login,
  forgotPassword,
  resetPassword,
  verifyEmail,
  verifyLink,
  me,
  updateProfile,
};
