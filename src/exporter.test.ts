import { describe, it, expect } from 'vitest'
import { ExporterFactory, JsonExporter } from './exporter'
import { TxtExporter } from './exporter'

describe('ExporterFactory', () => {
  it('should create a TXT exporter', () => {
    const exporterFactory = new ExporterFactory()
    const txtExporter = exporterFactory.create('txt')
    expect(txtExporter).toBeInstanceOf(TxtExporter)
  })
  it('should create a JSON exporter', () => {
    const exporterFactory = new ExporterFactory()
    const jsonExporter = exporterFactory.create('json')
    expect(jsonExporter).toBeInstanceOf(JsonExporter)
  })
})
