import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "隐私政策",
  description:
    "n8n Google Resource 隐私政策 - 了解我们如何收集、使用、披露和保护您的个人信息。",
  openGraph: {
    title: "隐私政策 | n8n Google Resource",
    description:
      "n8n Google Resource 隐私政策 - 了解我们如何收集、使用、披露和保护您的个人信息。",
  },
};

export default function Policy() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">隐私政策</h1>
          <p className="text-lg text-gray-600">最后更新日期：2025年6月22日</p>
        </div>

        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>1. 引言</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p>
                n8n Google
                Resource（&ldquo;我们&rdquo;、&ldquo;我们的&rdquo;或&ldquo;公司&rdquo;）
                重视您的隐私。本隐私政策说明我们如何收集、使用、披露和保护您的个人信息。
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>2. 我们收集的信息</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <h4 className="font-semibold mb-3">2.1 个人信息</h4>
              <p>我们可能收集以下类型的个人信息：</p>
              <ul className="list-disc list-inside space-y-2 mt-4">
                <li>姓名和联系信息（电子邮件地址、电话号码）</li>
                <li>账户凭据和偏好设置</li>
                <li>使用数据和活动日志</li>
                <li>设备信息和技术数据</li>
              </ul>

              <h4 className="font-semibold mb-3 mt-6">2.2 自动收集的信息</h4>
              <p>当您使用我们的服务时，我们可能自动收集：</p>
              <ul className="list-disc list-inside space-y-2 mt-4">
                <li>IP 地址和位置信息</li>
                <li>浏览器类型和版本</li>
                <li>访问时间和页面浏览记录</li>
                <li>Cookie 和类似技术的数据</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>3. 信息使用方式</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p>我们使用收集的信息用于：</p>
              <ul className="list-disc list-inside space-y-2 mt-4">
                <li>提供和维护我们的服务</li>
                <li>处理您的请求和交易</li>
                <li>改进和个性化用户体验</li>
                <li>发送重要通知和更新</li>
                <li>进行安全监控和欺诈防护</li>
                <li>遵守法律义务</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>4. 信息共享</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p>
                我们不会出售您的个人信息。我们可能在以下情况下共享您的信息：
              </p>
              <ul className="list-disc list-inside space-y-2 mt-4">
                <li>获得您的明确同意</li>
                <li>与可信的第三方服务提供商合作</li>
                <li>遵守法律要求或法律程序</li>
                <li>保护我们的权利和用户安全</li>
                <li>业务转让或合并情况下</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>5. Google 服务集成</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p>我们的平台与 Google 服务集成。当您连接 Google 账户时：</p>
              <ul className="list-disc list-inside space-y-2 mt-4">
                <li>我们遵循 Google API 服务用户数据政策</li>
                <li>仅访问您明确授权的数据</li>
                <li>不会存储不必要的 Google 账户信息</li>
                <li>您可以随时撤销访问权限</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>6. 数据安全</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p>我们采用多种安全措施保护您的信息：</p>
              <ul className="list-disc list-inside space-y-2 mt-4">
                <li>加密传输和存储</li>
                <li>访问控制和身份验证</li>
                <li>定期安全审计和监控</li>
                <li>员工安全培训</li>
                <li>物理和网络安全措施</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>7. 数据保留</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p>我们只在必要的时间内保留您的个人信息：</p>
              <ul className="list-disc list-inside space-y-2 mt-4">
                <li>账户活跃期间</li>
                <li>提供服务所需的时间</li>
                <li>遵守法律义务的期间</li>
                <li>解决争议的合理时间</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>8. 您的权利</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p>您对您的个人信息享有以下权利：</p>
              <ul className="list-disc list-inside space-y-2 mt-4">
                <li>访问和查看您的个人信息</li>
                <li>更正不准确或不完整的信息</li>
                <li>删除某些个人信息</li>
                <li>限制或反对某些处理活动</li>
                <li>数据可移植性</li>
                <li>撤回同意</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>9. Cookie 和跟踪技术</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p>我们使用 Cookie 和类似技术来：</p>
              <ul className="list-disc list-inside space-y-2 mt-4">
                <li>记住您的偏好设置</li>
                <li>分析网站使用情况</li>
                <li>提供个性化体验</li>
                <li>确保网站安全</li>
              </ul>
              <p className="mt-4">您可以通过浏览器设置管理 Cookie 偏好。</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>10. 国际数据传输</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p>
                您的信息可能被传输到您所在国家/地区以外的地方进行处理。
                我们确保此类传输符合适用的数据保护法律。
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>11. 政策更新</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p>
                我们可能不时更新此隐私政策。重要变更将通过电子邮件或服务通知您。
                更新后的政策将在发布时生效。
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>12. 联系我们</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p>如果您对此隐私政策有任何疑问或担忧，请联系我们：</p>
              <div className="mt-4 space-y-2">
                <p>
                  <strong>邮箱：</strong> privacy@n8n-google-resource.com
                </p>
                <p>
                  <strong>电话：</strong> +86 400-123-4567
                </p>
                <p>
                  <strong>地址：</strong> 中国北京市朝阳区xxx路xxx号
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
