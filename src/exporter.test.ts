import { describe, it, expect } from 'vitest'
import { ExporterFactory } from './exporter'
import { TxtExporter } from './exporter'

describe('ExporterFactory', () => {
  it('should create a TXT exporter', () => {
    const exporterFactory = new ExporterFactory()
    const txtExporter = exporterFactory.create('txt')
    expect(txtExporter).toBeInstanceOf(TxtExporter)
  })
})
