export const languages = [
  {
    name: 'JavaScript',
    value: 'javascript',
    template: 'function x() {\nconsole.log("Hello world!");\n}',
  },
  {
    name: 'TypeScript',
    value: 'typescript',
    template: 'function x(): void {\nconsole.log("Hello world!");\n}',
  },
  {
    name: 'Java',
    value: 'java',
    template:
      'public class HelloWorld {\n  public static void main(String[] args) {\n    System.out.println("Hello world!");\n  }\n}',
  },
  {
    name: 'Python',
    value: 'python',
    template: 'def x():\n  print("Hello world!")',
  },
  {
    name: 'C#',
    value: 'csharp',
    template:
      'using System;\n\nnamespace HelloWorld\n{\n    class Program\n    {\n        static void Main(string[] args)\n        {\n            Console.WriteLine("Hello world!");\n        }\n    }\n}',
  },
  {
    name: 'C++',
    value: 'cpp',
    template:
      '#include <iostream>\n\nint main() {\n    std::cout << "Hello world!" << std::endl;\n    return 0;\n}',
  },
  {
    name: 'Go',
    value: 'go',
    template:
      'package main\n\nimport "fmt"\n\nfunc main() {\n    fmt.Println("Hello world!")\n}',
  },
  {
    name: 'Rust',
    value: 'rust',
    template: 'fn main() {\n    println!("Hello world!");\n}',
  },
];

export const editorOptions = {
  theme: 'vs-dark',
  language: 'javascript',
  automaticLayout: true,
};
