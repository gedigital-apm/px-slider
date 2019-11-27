const $_documentContainer = document.createElement('template');

$_documentContainer.innerHTML = `<dom-module id="px-handle-styles">
<template>
<style>
.handleGroup{cursor:pointer}.handleGroup .handleBody{fill:var(--px-handle-background-color,#fff);stroke:var(--px-handle-stroke-color,#000);stroke-miterlimit:10;transition:all .4s}.handleGroup .handleBodyHover{fill:var(--px-handle-background-color--hover,gray);stroke:var(--px-handle-stroke-color--hover,#000)}.handleGroup .handleBodyPressed{fill:var(--px-handle-background-color--active,#000);stroke:var(--px-handle-stroke-color--active,#000)}.handleGroup.disabled .handleBody,.handleGroup.disabled svg{stroke:var(--px-handle-color--disabled,gray)}.handleGroup.disabled{cursor:not-allowed;border-color:var(--px-handle-color--disabled,gray);background-color:var(--px-handle-background-color--disabled,#fff);box-shadow:none}.handleGroup.disabled .handleBody{fill:var(--px-handle-background-color--disabled,#fff)}
</style>
</template>
</dom-module>`;

document.head.appendChild($_documentContainer.content);

/*
Copyright (c) 2018, General Electric

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
/*
  FIXME(polymer-modulizer): the above comments were extracted
  from HTML and may be out of place here. Review them and
  then delete this comment!
*/
;
