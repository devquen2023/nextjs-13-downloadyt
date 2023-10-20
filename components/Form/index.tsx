import React from 'react';
import { FormEvent, useCallback, useState } from "react";
import styles from "./Form.module.css"

interface MyFormProps {
    onSubmit?:(event: FormEvent<HTMLFormElement>) => void;
}
function MyForm({ onSubmit}:MyFormProps) {
   
  return (
    <form className={styles.ytForm } onSubmit={onSubmit}>
      <input placeholder='Enter url video from Youtube or Phuong My Chi Music (phuongmychi.vn)' type="text" name="urlVideo" className={styles?.ytInput} />
      <button type="submit" className={styles?.ytButton}>Submit</button>
    </form>
  );
}

export default MyForm;