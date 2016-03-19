import {inject, customElement, bindable} from 'aurelia-framework';
import  'jquery-ui';
import  'aehlke/tag-it';
import 'aehlke/tag-it/css/jquery.tagit.css!';
import 'jquery-ui/themes/flick/jquery-ui.css!';

@customElement('tag-it')
@inject(Element)
export class Tagit {
  @bindable tags;

  constructor(element) {
    this.element = element;
  }

  bind() {
    var input = this.element.querySelector('input');
    $(input).tagit({
      allowSpaces: true,
      placeholderText:'Tag1,Tag2,Tag3',
      afterTagAdded: (event, ui) => {
        this.tags = $(event.target).val();
      },
      afterTagRemoved: (event) => {
        this.tags = $(event.target).val();
      }
    });
  }
}
