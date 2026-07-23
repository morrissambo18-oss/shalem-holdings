import assert from 'node:assert/strict'
import test from 'node:test'
import { getLegalType, isHomePath } from './routing.js'

test('recognizes clean legal paths', () => {
  assert.equal(getLegalType('/privacy'), 'privacy')
  assert.equal(getLegalType('/terms/'), 'terms')
})

test('supports legacy query links and ignores unknown pages', () => {
  assert.equal(getLegalType('/', '?legal=privacy'), 'privacy')
  assert.equal(getLegalType('/services', ''), null)
  assert.equal(getLegalType('/', '?legal=unknown'), null)
})

test('recognizes the homepage path', () => {
  assert.equal(isHomePath('/'), true)
  assert.equal(isHomePath('///'), true)
  assert.equal(isHomePath('/missing'), false)
})
