export interface Task {
  name: string
  creationDate: Date
  status: 'completed' | 'pending'
}

interface DataExporter {
  getData(tasks: Task[]): string
}

export class ExporterFactory {
  create(type: string): DataExporter {
    switch (type) {
      case 'txt':
        return new TxtExporter()
      case 'json':
        return new JsonExporter()
      default:
        throw new Error('Exporter type not supported')
    }
  }
}

export class JsonExporter implements DataExporter {
  getData(tasks: Task[]): string {
    return JSON.stringify(tasks)
  }
}

export class TxtExporter implements DataExporter {
  getData(tasks: Task[]): string {
    return tasks
      .map((task) => `${task.name} - ${task.creationDate} - ${task.status}`)
      .join('\n')
  }
}
