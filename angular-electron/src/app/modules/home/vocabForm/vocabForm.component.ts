import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Vocab } from '../../core/interface/vocab.interface';

@Component({
  selector: 'vocab-form',
  templateUrl: 'vocabForm.component.html'
})
export class VocabFormComponent implements OnInit {

  vocabForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) {
  }

  ngOnInit() {
    this.initVocabFields();
  }

  private initVocabFields() {
    this.vocabForm = this.formBuilder.group({
      text: ['', [Validators.required]],
      transliteration: [''],
      translation: ['', [Validators.required]],
      sentences: this.formBuilder.array([
        this.initSentenceFields(),
      ])
    });
  }

  private initSentenceFields() {
    return this.formBuilder.group({
      sentenceText: ['', Validators.required],
      sentenceTransliteration: [''],
      sentenceTranslation: [''],
    });
  }

  addSentence() {
    const control = <FormArray>this.vocabForm.controls['sentences'];
    control.push(this.initSentenceFields());
  }

  removeSentence(i: number) {
    const control = <FormArray>this.vocabForm.controls['sentences'];
    control.removeAt(i);
  }

  save(model: Vocab) {
    console.log(model);
  }
}