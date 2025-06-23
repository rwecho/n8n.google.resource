import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            n8n Google Resource
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            强大的自动化工作流平台，帮助您连接 Google 服务和其他应用程序，
            实现业务流程自动化，提高工作效率。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-4">
              开始使用
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4">
              了解更多
            </Button>
          </div>
        </section>

        {/* Features Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            核心功能
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  🔗 Google 集成
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  无缝连接 Google Workspace、Google Drive、Gmail 等服务，
                  实现数据同步和自动化操作。
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  ⚡ 工作流自动化
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  通过可视化界面设计复杂的工作流程，
                  自动化重复性任务，节省时间和精力。
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">🛠️ 易于使用</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  直观的拖拽界面，无需编程基础， 快速创建和部署自动化解决方案。
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">📊 数据处理</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  强大的数据转换和处理能力， 支持各种数据格式和复杂的业务逻辑。
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">🔒 安全可靠</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  企业级安全标准，保护您的数据安全，
                  支持各种认证方式和权限控制。
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">🌐 云端部署</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  支持云端和本地部署， 高可用性架构，确保服务稳定运行。
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center bg-white rounded-2xl p-12 shadow-lg mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            准备开始您的自动化之旅？
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            立即体验 n8n Google Resource，让我们帮助您构建高效的自动化工作流程。
          </p>
          <Button size="lg" className="text-lg px-12 py-4">
            免费试用
          </Button>
        </section>

        {/* Data Usage and Privacy Section */}
        <section className="text-center mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            数据使用透明性
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-600 mb-4">
              n8n Google Resource 致力于保护您的隐私和数据安全。我们请求访问您的
              Google 数据仅用于以下目的：
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold text-gray-900 mb-2">
                  🔄 工作流自动化
                </h3>
                <p className="text-gray-600">
                  访问您的 Google 服务以执行您配置的自动化工作流程
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold text-gray-900 mb-2">
                  📊 数据同步
                </h3>
                <p className="text-gray-600">
                  在您授权的应用程序之间同步和转换数据
                </p>
              </div>
            </div>
            <p className="text-gray-600 mb-6">
              我们不会存储、分享或出售您的个人数据。所有数据处理都在您的控制之下进行。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" asChild>
                <a href="/policy">查看隐私政策</a>
              </Button>
              <Button variant="outline" asChild>
                <a href="/terms">服务条款</a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">n8n Google Resource</h3>
              <p className="text-gray-300">
                强大的自动化工作流平台，连接 Google 服务与其他应用程序。
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">产品</h4>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    工作流自动化
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Google 集成
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    数据处理
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">法律信息</h4>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <a
                    href="https://n8n-res.0x2a.top/policy"
                    className="hover:text-white transition-colors"
                  >
                    隐私政策
                  </a>
                </li>
                <li>
                  <a
                    href="https://n8n-res.0x2a.top/terms"
                    className="hover:text-white transition-colors"
                  >
                    服务条款
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    联系我们
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
            <p>&copy; 2025 n8n Google Resource. 保留所有权利。</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
