import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

import { StorageService } from '../../core/storage/storage.service';

import { Sentence, Vocab } from '../../core/interface/vocab.interface';

@Component({
  selector: 'vocab-form',
  templateUrl: 'vocabForm.component.html',
  styleUrls: ['./vocabForm.component.scss']
})
export class VocabFormComponent implements OnInit {

  vocabForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private storageService: StorageService
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
      text: [''],
      transliteration: [''],
      translation: [''],
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

  save(form: FormGroup) {
    let formVocabBasic = form.value;
    let formVocabSentences = form.value.sentences;
    let sentences = [];

    for (let sentence of formVocabSentences) {
      sentences.push({
        text: sentence.text,
        transliteration: sentence.transliteration,
        translation: sentence.translation
      } as Sentence);
    }

    let vocab = {
      text: formVocabBasic.text,
      transliteration: formVocabBasic.transliteration,
      translation: formVocabBasic.translation,
      sentences: sentences
    } as Vocab;

    this.storageService.storeVocab(vocab);
    this.vocabForm.reset();

  }
}