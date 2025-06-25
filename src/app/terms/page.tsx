import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "服务条款",
  description: "n8n Google Resource 服务条款 - 了解使用我们平台的条款和条件。",
  openGraph: {
    title: "服务条款 | n8n Google Resource",
    description:
      "n8n Google Resource 服务条款 - 了解使用我们平台的条款和条件。",
  },
};

export default function Terms() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">服务条款</h1>
          <p className="text-lg text-gray-600">最后更新日期：2025年6月22日</p>
        </div>

        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>1. 接受条款</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p>
                欢迎使用 n8n Google Resource 平台。通过访问和使用我们的服务，
                您同意遵守这些服务条款。如果您不同意这些条款，请不要使用我们的服务。
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>2. 服务描述</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p>n8n Google Resource 是一个自动化工作流平台，允许用户：</p>
              <ul className="list-disc list-inside space-y-2 mt-4">
                <li>连接和集成各种 Google 服务</li>
                <li>创建自动化工作流程</li>
                <li>处理和转换数据</li>
                <li>监控和管理自动化任务</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>3. 用户责任</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p>作为用户，您同意：</p>
              <ul className="list-disc list-inside space-y-2 mt-4">
                <li>提供准确、完整的注册信息</li>
                <li>保护您的账户凭据安全</li>
                <li>不使用服务进行非法或未经授权的活动</li>
                <li>遵守所有适用的法律法规</li>
                <li>不干扰或破坏服务的正常运行</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>4. 数据使用和隐私</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p>
                我们重视您的隐私。您的数据使用受我们的隐私政策约束。
                通过使用我们的服务，您同意按照隐私政策收集和使用您的信息。
              </p>
              <p className="mt-4">
                您保留对通过我们服务处理的数据的所有权。我们仅在提供服务所需的范围内使用您的数据。
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>5. 服务可用性</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p>
                我们努力保持服务的高可用性，但不能保证服务始终可用。
                服务可能因维护、更新或其他原因而暂时中断。
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>6. 知识产权</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p>
                服务中的所有内容，包括但不限于文本、图形、用户界面、代码和软件，
                均受知识产权法保护。未经明确许可，您不得复制、修改或分发这些内容。
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>7. 免责声明</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p>
                服务按&ldquo;现状&rdquo;提供，不附带任何明示或暗示的保证。
                我们不保证服务将满足您的特定需求或完全无错误。
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>8. 责任限制</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p>
                在法律允许的最大范围内，我们对因使用或无法使用服务而导致的任何直接、
                间接、附带、特殊或后果性损害不承担责任。
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>9. 条款修改</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p>
                我们保留随时修改这些服务条款的权利。重大变更将通过服务或其他适当方式通知用户。
                继续使用服务即表示您接受修改后的条款。
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>10. 联系信息</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p>如果您对这些服务条款有任何疑问，请通过以下方式联系我们：</p>
              <div className="mt-4">
                <p>邮箱：support@n8n-google-resource.com</p>
                <p>电话：+86 400-123-4567</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
