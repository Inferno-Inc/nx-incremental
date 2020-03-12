module.exports = {
  name: 'ngapp',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/ngapp',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
