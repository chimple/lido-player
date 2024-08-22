import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'app-objective',
  styleUrl: 'objective.css',
  shadow: false,
})
export class AppObjective {
  @Prop() value: string;
  @Prop() string: string;

  render() {
    return <div class="objective">{this.string.split(',').join(' ')}</div>;
  }
}
